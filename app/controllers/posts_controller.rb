class PostsController < ApplicationController
  http_basic_authenticate_with :name => ENV['USERNAME'], :password => ENV['PASSWORD'], :only => [:new, :create, :edit, :update, :destroy] if Rails.env.production?

  def about
  end

  def work
  end

  def contact
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    if request.path != post_path(@post)
      redirect_to @post, status: :moved_permanently
    end
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post
    else
      render "new"
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    if @post.update_attributes(post_params)
      render "show"
    else
      render "edit"
    end
  end

  def destroy
    @post = Post.find(params[:id]).destroy
    redirect_to blog_path
  end

  def ribbon
  end

  def exec
  end

  def accenture
  end

  def chicagofounders
  end

  def googlecafes
  end

  def ferrari
  end

  def snocom
  end

  private
    def post_params
      params.require(:post).permit(:title, :body, :tag, :published, :photo)
    end

end
