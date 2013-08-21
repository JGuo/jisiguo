class PostsController < ApplicationController
  http_basic_authenticate_with :name => Jisiguo.config.name, :password => Jisiguo.config.password, :except => [:index, :show] if Rails.env.production?

  def about
  end

  def projects
  end

  def contact
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by_id(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
    else
      render "new"
    end
  end

  def edit
    @post = Post.find_by_id(params[:id])
  end

  def update
    @post = Post.find_by_id(params[:id])
    @post.update_attributes(post_params)
    if @post.update_attributes(post_params)
      render "show"
    else
      render "edit"
    end
  end

  def destroy
  end

  private
    def post_params
      params.require(:post).permit(:title, :body, :tag, :published)
    end

end
